import React from 'react'
import Input, { validator } from '../Input'
import Container from '../../Layout/Container'
import Header from '../Header'
import styled from 'styled-components'

const Layout = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  flex-wrap: wrap;
`;

export default class CustomerInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        name: {
          label: 'name',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please enter your name',
          },{
            validator: validator.isName,
            message: 'Please enter a valid name',
          }],
        },
        email: {
          label: 'email',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please enter your email',
          },
          {
            validator: validator.isEmail,
            message: 'Please input a valid email',
          }
        ],
        },
        confirmEmail: {
          label: 'confirmEmail',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please enter your confirm email',
          },
          {
            validator: validator.isEmail,
            message: 'Please input a valid confirm email',
          },
          {
            validator: validator.isIdentical,
            message: 'Confim email does not match email',
            options: {
              getTarget: () => this.state.formData.email.value,
            },
          }],
        },
        phoneNumber: {
          label: 'phoneNumber',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please enter your phone number',
          },{
            validator: validator.isMobile,
            message: 'Please input a valid phone number',
          }],
        },
        address: {
          label: 'address',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please enter your address',
          }],
        },
        postCode: {
          label: 'postCode',
          value: '',
          validations: [{
            validator: validator.isNotEmpty,
            message: 'Please enter your postcode',
          },{
            validator: validator.isPostcode,
            message: 'PLease enter a valid postcode',
          }],
        },
      }
    }
  }

  handleOnInput = (e, key) => {
    const { target: { value } } = e
    this.setState(prevState => {
      return {
        formData: {
          ...prevState.formData,
          [key]: {
            ...prevState.formData[key],
            value,
          },
        }
      }
    })

  }
  render() {
    const { formData } = this.state
    return (
      <Container>
        <Header>Please Enter Your Detail</Header>
        <Layout>
          {Object.keys(formData).map(key => {
            const { label, value, validations } = formData[key]
            return (
              <Input
                key={key}
                placeholder={label}
                value={value}
                validations={validations}
                onChange={(e) => this.handleOnInput(e, key)}
              />
            )
          })}
        </Layout>
      </Container>
    )
  }
}
