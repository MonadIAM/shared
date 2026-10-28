import { NotificationCategory } from "../../../enums";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const dataset = [
    {
        id: "00000012-0000-4000-8000-100000000001",
        recipient_id: "00000010-0000-4000-8000-100000000001",
        channel_type: "EMAIL",
        category: NotificationCategory.INVITES,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "00000012-0000-4000-8000-100000000002",
        recipient_id: "00000010-0000-4000-8000-100000000001",
        channel_type: "EMAIL",
        category: NotificationCategory.SYSTEM,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "00000012-0000-4000-8000-100000000003",
        recipient_id: "00000010-0000-4000-8000-100000000001",
        channel_type: "EMAIL",
        category: NotificationCategory.OTHER,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "00000012-0000-4000-8000-100000000004",
        recipient_id: "00000010-0000-4000-8000-100000000002",
        channel_type: "EMAIL",
        category: NotificationCategory.INVITES,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "00000012-0000-4000-8000-100000000005",
        recipient_id: "00000010-0000-4000-8000-100000000002",
        channel_type: "EMAIL",
        category: NotificationCategory.SYSTEM,
        is_duplication_enabled: false,
        created_at: CREATED_AT,
        updated_at: null,
        version: 1,
    },
    {
        id: "00000012-0000-4000-8000-100000000006",
        recipient_id: "00000010-0000-4000-8000-100000000002",
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
