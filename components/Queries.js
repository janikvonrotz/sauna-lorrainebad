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

export {
  ALL_NEWS
}
