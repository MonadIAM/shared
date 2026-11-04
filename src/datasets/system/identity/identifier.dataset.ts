/* eslint-disable prettier/prettier */
import { ADMIN_ACCOUNT_ID, USER_ACCOUNT_ID } from "../../../constants";
import { IdentifierType } from "../../../enums";

const CREATED_AT  = new Date("2026-01-01T00:00:00.000Z");
const VERIFIED_AT = new Date("2026-01-01T00:00:00.000Z");

const dataset = [
    {
        id: "74e70d3a-5130-4b3a-9ab6-cbfe430a5813",
        type: IdentifierType.EMAIL,
        identity: "admin@example.com",
        provider_user_id: null,
        provider: null,
        is_public_contact: false,
        is_verified: true,
        account_id: ADMIN_ACCOUNT_ID,
        verified_at: VERIFIED_AT,
        created_at: CREATED_AT,
        last_used_at: null,
    },
    {
        id: "562458c0-9d34-4882-8bcd-fdf79aed979c",
        type: IdentifierType.EMAIL,
        identity: "user@example.com",
        provider_user_id: null,
        provider: null,
        is_public_contact: false,
        is_verified: true,
        account_id: USER_ACCOUNT_ID,
        verified_at: VERIFIED_AT,
        created_at: CREATED_AT,
        last_used_at: null,
    },
];

export const Identifiers = {
    name: "identifier",
    postgresql: dataset,
};
