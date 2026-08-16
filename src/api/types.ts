export type UserProfile = {
  id: string;
  tenant_id: string;
  tenant_name: string;
  branch_id: string | null;
  branch_name: string | null;
  email: string;
  full_name: string;
  is_active: boolean;
  is_superadmin: boolean;
  category: string | null;
  permissions: string[];
  warehouse_ids: string[];
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: UserProfile;
};
