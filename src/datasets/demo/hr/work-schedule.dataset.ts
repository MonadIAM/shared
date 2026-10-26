const dataset = [
    {
        id: "4ebf01a3-4ab6-5db3-88fe-681e2e0faf4c",
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        code: "OFFICE",
        name: "Office - Monday-Friday",
        revision: 1,
        status: "ACTIVE",
        pattern_type: "WEEKLY",
        calendar_application: "APPLY_OVERRIDES",
        pattern: {
            schemaVersion: 1,
            week: {
                "1": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "2": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "3": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "4": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "5": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "6": {
                    intervals: [],
                },
                "7": {
                    intervals: [],
                },
            },
        },
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
    {
        id: "796f9d93-1df9-5a5f-b074-8bae0af47f67",
        organization_id: "727b53df-bf8b-5434-aa84-6870a620d239",
        code: "SHIFT",
        name: "Operations - two on, two off",
        revision: 1,
        status: "ACTIVE",
        pattern_type: "CYCLIC",
        calendar_application: "KEEP_CYCLE",
        pattern: {
            schemaVersion: 1,
            cycle: [
                {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                {
                    intervals: [],
                },
                {
                    intervals: [],
                },
            ],
        },
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
    {
        id: "2eeb4766-e93e-575f-81fc-7931ed2d6ccf",
        organization_id: "b73d2bb5-706b-5f0e-8118-29ed2d680e5d",
        code: "OFFICE",
        name: "Office - Monday-Friday",
        revision: 1,
        status: "ACTIVE",
        pattern_type: "WEEKLY",
        calendar_application: "APPLY_OVERRIDES",
        pattern: {
            schemaVersion: 1,
            week: {
                "1": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "2": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "3": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "4": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "5": {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                "6": {
                    intervals: [],
                },
                "7": {
                    intervals: [],
                },
            },
        },
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
    {
        id: "84f597c2-540f-5a17-9dd3-dfa6838d7f9c",
        organization_id: "b73d2bb5-706b-5f0e-8118-29ed2d680e5d",
        code: "SHIFT",
        name: "Operations - two on, two off",
        revision: 1,
        status: "ACTIVE",
        pattern_type: "CYCLIC",
        calendar_application: "KEEP_CYCLE",
        pattern: {
            schemaVersion: 1,
            cycle: [
                {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                {
                    intervals: [
                        {
                            start: "09:00",
                            end: "17:00",
                            endDayOffset: 0,
                        },
                    ],
                },
                {
                    intervals: [],
                },
                {
                    intervals: [],
                },
            ],
        },
        created_at: new Date("2025-06-12T09:00:00.000Z"),
        updated_at: null,
        version: 1,
    },
];

export const WorkSchedules = {
    name: "work_schedule",
    postgresql: dataset,
};
