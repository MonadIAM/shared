import { ADMIN_ACCOUNT_ID, USER_ACCOUNT_ID } from "../../../constants";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const dataset = [
    {
        id: "0303d328-d5e5-4069-8c4d-1443a7dc58d3",
        account: ADMIN_ACCOUNT_ID,
        locale: "en",
        timezone: "UTC",
        default_otp_channel_id: null,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "fbadf344-ad35-41c5-b19e-19d6d8a34936",
        account: USER_ACCOUNT_ID,
        locale: "en",
        timezone: "UTC",
        default_otp_channel_id: null,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
];

export const Recipients = {
    name: "recipient",
    postgresql: dataset,
};
