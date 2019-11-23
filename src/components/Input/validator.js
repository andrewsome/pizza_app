const NAME_REGEX = /^[a-zA-Z]+(([',.-][a-zA-Z])?[a-zA-Z]*)*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const MOBILE_REGEX = /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\|-){0,1}[0-9]{2}(\|-){0,1}[0-9]{2}(\|-){0,1}[0-9]{1}(\|-){0,1}[0-9]{3}$/;
const POSTCODE_REGEX = /^(?:(?:[2-8]\d|9[0-7]|0?[28]|0?9(?=09))(?:\d{2}))$/;
const ADDRESS_REGEX = /((?<strPOBox>((POBox|PO\sBox)\s*\d*)),?\s?)?(((?<strUnit>([\w\d\s\]*)),\s?)?((?<strStreet>([\w\s\]*\w\s(st\s)?[\w]*\s(street|st|road|rd|close|cl|avenue|ave|av|path|ph|drive|drv|LOOP|COURT|CT|CIRCLE|LANE|LN))),?\s?))?((?<strTown>([\p{Ll}\p{Lu}\p{Lo}\p{Pc}\p{Lt}\p{Lm}\s]*)),?\s?)?((?<strState>(Victoria|VIC|New South Wales|NSW|South Australia|SA|Northern Territory|NT|West Australia|WA|Tasmania|TAS|ACT|Queensland|QLD))\s*)?(?<strPostalCode>(\d{4}),?\s?)?(?<strCountry>(Australia))?/;

export default{
  isNotEmpty: (value) => !!value,
  isName: (value) => NAME_REGEX.test(value),
  isEmail: (value) => EMAIL_REGEX.test(value),
  isMobile: (value) => MOBILE_REGEX.test(value),
  isPostcode: (value) => POSTCODE_REGEX.test(value),
  isAddress: (value) => ADDRESS_REGEX.test(value),
  isIdentical: (value, { getTarget }) => value === getTarget(),
}