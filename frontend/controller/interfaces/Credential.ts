/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Credential {
  id: number
  type: string
  url: string
  related: {
    created_by: string
    modified_by: string
    activity_stream: string
    access_list: string
    object_roles: string
    owner_users: string
    owner_teams: string
    copy: string
    input_sources: string
    credential_type: string
    user?: string
  }
  summary_fields: {
    credential_type: {
      id: number
      name: string
      description: string
    }
    created_by: {
      id: number
      username: string
      first_name: string
      last_name: string
    }
    modified_by: {
      id: number
      username: string
      first_name: string
      last_name: string
    }
    object_roles: {
      admin_role: {
        description: string
        name: string
        id: number
      }
      use_role: {
        description: string
        name: string
        id: number
      }
      read_role: {
        description: string
        name: string
        id: number
      }
    }
    user_capabilities: {
      edit: boolean
      delete: boolean
      copy: boolean
      use: boolean
    }
    owners: {
      id: number
      type: string
      name: string
      description: string
      url: string
    }[]
  }
  created: string
  modified: string
  name: string
  description: string
  organization: null
  credential_type: number
  managed: boolean
  inputs: {
    url?: string
    username?: string
  }
  kind: string
  cloud: boolean
  kubernetes: boolean
}