import { ChannelType } from "../../../enums";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const dataset = [
    {
        id: "3a7d41a0-4255-4a9f-adf6-96b4bcfa900b",
        recipient_id: "0303d328-d5e5-4069-8c4d-1443a7dc58d3",
        type: ChannelType.IN_APP,
        address: null,
        source_identifier: null,
        sound_enabled: true,
        is_verified: true,
        verified_at: CREATED_AT,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "fe5915ee-ea2f-45b9-9226-f67e22fd5226",
        recipient_id: "0303d328-d5e5-4069-8c4d-1443a7dc58d3",
        type: ChannelType.EMAIL,
        address: "admin@example.com",
        source_identifier: "74e70d3a-5130-4b3a-9ab6-cbfe430a5813",
        sound_enabled: null,
        is_verified: true,
        verified_at: CREATED_AT,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "e5dbe439-27be-4f24-8bc0-8f4cc73f794d",
        recipient_id: "fbadf344-ad35-41c5-b19e-19d6d8a34936",
        type: ChannelType.IN_APP,
        address: null,
        source_identifier: null,
        sound_enabled: true,
        is_verified: true,
        verified_at: CREATED_AT,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "1929372c-c62b-4c46-96fb-d07347d1cd4f",
        recipient_id: "fbadf344-ad35-41c5-b19e-19d6d8a34936",
        type: ChannelType.EMAIL,
        address: "user@example.com",
        source_identifier: "562458c0-9d34-4882-8bcd-fdf79aed979c",
        sound_enabled: null,
        is_verified: true,
        verified_at: CREATED_AT,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
];

export const Channels = {
    name: "channel",
    postgresql: dataset,
};
