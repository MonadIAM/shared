import { NotificationCategory } from "../../../enums";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const dataset = [
    {
        id: "11247eb6-af28-4bcf-86fd-1c129c92daf1",
        recipient_id: "0303d328-d5e5-4069-8c4d-1443a7dc58d3",
        channel_type: "EMAIL",
        category: NotificationCategory.INVITES,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "0b832a24-1742-468c-b4aa-a6c03185c345",
        recipient_id: "0303d328-d5e5-4069-8c4d-1443a7dc58d3",
        channel_type: "EMAIL",
        category: NotificationCategory.SYSTEM,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "56d50287-f4dc-4c84-b4dd-14bc5e3bb71d",
        recipient_id: "0303d328-d5e5-4069-8c4d-1443a7dc58d3",
        channel_type: "EMAIL",
        category: NotificationCategory.OTHER,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "c151d6c6-6d36-457a-8382-aa5ba6fe28c9",
        recipient_id: "fbadf344-ad35-41c5-b19e-19d6d8a34936",
        channel_type: "EMAIL",
        category: NotificationCategory.INVITES,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "7ade166e-f9ec-45c6-a971-302415a1d4cc",
        recipient_id: "fbadf344-ad35-41c5-b19e-19d6d8a34936",
        channel_type: "EMAIL",
        category: NotificationCategory.SYSTEM,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "0a23fcbe-8ca9-4475-b986-b05bbb569763",
        recipient_id: "fbadf344-ad35-41c5-b19e-19d6d8a34936",
        channel_type: "EMAIL",
        category: NotificationCategory.OTHER,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
];

export const Preferences = {
    name: "preference",
    postgresql: dataset,
};
