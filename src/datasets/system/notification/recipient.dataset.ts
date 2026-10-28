import { ADMIN_ACCOUNT_ID, USER_ACCOUNT_ID } from "../../../constants";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const dataset = [
    {
        id: "00000010-0000-4000-8000-100000000001",
        account: ADMIN_ACCOUNT_ID,
        locale: "en",
        timezone: "UTC",
        default_otp_channel_id: null,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "00000010-0000-4000-8000-100000000002",
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
