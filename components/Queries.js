import gql from 'graphql-tag'

const ALL_NEWS = gql`
{
  allNews {
    _id
    title
    link
    date
  }
}
`

const AARE_TEMPERATURE = gql`
{
  aareTemperature {
    value
    quote
  }
}
`

const SAUNA = gql`
{
  sauna(id: "5bce139792a5f41e7aa6382b") {
    current_seats
    max_seats
    capacity_message
  }
}

`

export {
  ALL_NEWS,
  AARE_TEMPERATURE,
  SAUNA
}
