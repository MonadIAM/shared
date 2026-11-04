/* eslint-disable @typescript-eslint/explicit-function-return-type, prettier/prettier */
import {
    ADMINISTRATOR_ROLE_ID,
    SYSTEM_USER_ROLE_ID,
    ADMIN_ACCOUNT_ID,
    USER_ACCOUNT_ID,
    SYSTEM_REALM_ID,
} from "../../../constants";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const entry = (id: string, role: string, account: string) => ({
    id,
    account,
    role_id: role,
    realm_id: SYSTEM_REALM_ID,
    is_system_managed: true,
    is_revoked: false,
    created_at: CREATED_AT,
    version: 1,
});

const dataset = [
    entry("0303d328-d5e5-4069-8c4d-1443a7dc58d3", ADMINISTRATOR_ROLE_ID, ADMIN_ACCOUNT_ID),
    entry("fbadf344-ad35-41c5-b19e-19d6d8a34936", SYSTEM_USER_ROLE_ID,   USER_ACCOUNT_ID),
];

export const AccountRoleAssignments = {
    name: "account_role_assignment",
    postgresql: dataset,
    redis: dataset,
};
