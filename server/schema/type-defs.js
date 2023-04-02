const typeDefs = `#graphql
type Hero{
  id: Int!,
  localized_name: String!,
  primary_attr: String!,
  attack_type: String!,
  roles: [String!]!,
  img: String!,
  icon: String!,
  base_health:Int!,
  base_mana:Int!,
  base_mr: Int!
  attack_range: Int!,
}
type Query {
  heroes:[Hero!]! 
}
`;

export default typeDefs;
