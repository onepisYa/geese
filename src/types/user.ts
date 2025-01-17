import { RepoType } from './reppsitory';

export interface UserAvaterProps {
  avatar: string;
  uid: string;
}

export interface User {
  uid: string;
  token: string;
  userInfo: UserType;
}

export interface UserType {
  uid: string;
  nickname: string;
  avatar: string;
}

export interface UserStatusProps {
  success: string;
  uid: string;
  nickname: string;
  avatar: string;
  permission: Permission;
  contribute: number;
  level: number;
  next_level_score: number;
  first_login: string;
  last_login: string;
}

export interface OAuthURLResponse {
  url: string;
}

export interface Permission {
  name: string;
  code: string;
}

export interface UserDetailInfo {
  uid: string;
  nickname: string;
  avatar: string;
  contribute_total: number;
  share_repo_total: number;
  comment_repo_total: number;
  permission: Permission;
  first_login: string;
  last_login: string;
  rank: number;
  level: number;
  in_person: boolean;
}

export interface DynamicRecordItem {
  name: string;
  item_id: string;
}

export interface DynamicRecord {
  uid: string;
  item: DynamicRecordItem;
  created_at: string;
  dynamic_type: string;
  value: number;
  remark: string;
}

export interface CollectItem {
  uid: string;
  created_at: string;
  repo: RepoType;
}
