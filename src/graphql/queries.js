import gql from "graphql-tag";

export const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int!) {
    launches(limit: $limit) {
      mission_name

      launch_date_utc
    }
  }
`;
