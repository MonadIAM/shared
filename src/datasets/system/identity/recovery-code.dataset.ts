/* eslint-disable prettier/prettier */
import { ADMIN_ACCOUNT_ID, USER_ACCOUNT_ID } from "../../../constants";

const CREATED_AT = new Date("2026-01-01T00:00:00.000Z");

const ADMIN_RECOVERY_CODE_1_HASH = "$argon2id$v=19$m=19456,t=2,p=1$FqGQforlAIe7KTF3fYL2XA$jkh8BArVtk5XGCUAUc8M6cawj0RIm52YI6oPG+1NumI";
const ADMIN_RECOVERY_CODE_2_HASH = "$argon2id$v=19$m=19456,t=2,p=1$DnBJZn3gptZ0kGgPJNvLzQ$wd1BGklCtK6fTpqeuVrMSCc2Rs8qL5mswNX6gZoa01c";
const ADMIN_RECOVERY_CODE_3_HASH = "$argon2id$v=19$m=19456,t=2,p=1$i7vDzegh9RtHy/zlz12pog$wUitTpKq8wXKPp+aoutqXXMVx0SXr2ayYohxGo2Hu80";
const ADMIN_RECOVERY_CODE_4_HASH = "$argon2id$v=19$m=19456,t=2,p=1$KAMiHhyv/hqPC/d81JbHBQ$lfBRcpFWrkKizr9QMGKbjJmHRv0os26OIyXcsbTtiwU";
const ADMIN_RECOVERY_CODE_5_HASH = "$argon2id$v=19$m=19456,t=2,p=1$A+hKbAc89SzK6W21ay94QQ$YlKSELglA11A1MoFFAgzpHcMvRuCKJp7bX0EYbQilXk";
const ADMIN_RECOVERY_CODE_6_HASH = "$argon2id$v=19$m=19456,t=2,p=1$x2xtWGWYNStRKGzniN1tSQ$E2h9c8Oj3f3hA01+AR3ukRq62Hmd6JxMx9vT6bXuPus";
const ADMIN_RECOVERY_CODE_7_HASH = "$argon2id$v=19$m=19456,t=2,p=1$B8IITyfl5vX/9juhDkzP7A$PiVD44WnEHP3tiABMH8qK8wpD+RhFK9xVrYxGCH7qzQ";
const ADMIN_RECOVERY_CODE_8_HASH = "$argon2id$v=19$m=19456,t=2,p=1$61JgwxCiRwoXEzKx5p1e0Q$LvGbg2kRPKB7S5x7nWUgS+uOevoJBK7/RNnR4IPVqDs";
// "27E6-4F3F", "36A6-5214", "FBBE-C584", "1BBC-EB91", "C0EC-BBAE", "40A3-8BFC", "AB67-D15D", "428D-3738"

const USER_RECOVERY_CODE_1_HASH = "$argon2id$v=19$m=19456,t=2,p=1$/iC6Prt+KFVzt99ei0vfww$djPmHXQvYMnbwL2MY+50TG51VFHNJmMmLaQW8A97NzE";
const USER_RECOVERY_CODE_2_HASH = "$argon2id$v=19$m=19456,t=2,p=1$BOvl09guLxuThixGq6AMIw$xrpS6bNWuxf1CYAgaHP2YmNe/MgYJbVzxjsU0K0jQ/c";
const USER_RECOVERY_CODE_3_HASH = "$argon2id$v=19$m=19456,t=2,p=1$fhCWVouKblr5w86zB4Ucsw$uyarU6VoVurIPcqCtD824Qc/TEepJzefLzSoQ8aBGMs";
const USER_RECOVERY_CODE_4_HASH = "$argon2id$v=19$m=19456,t=2,p=1$5AqKnOU+6IqU6WJpv2C4Eg$ufVwc8oOsuC3NhGUHl1C8ZtwrpeyCwG0ookjOeGfpfI";
const USER_RECOVERY_CODE_5_HASH = "$argon2id$v=19$m=19456,t=2,p=1$4qAFTlfz8kRYDpzubnaMcg$0tcbUYEjxcLqHV3VrP+a4+L5MtgX1A+E2zGxosEgTqQ";
const USER_RECOVERY_CODE_6_HASH = "$argon2id$v=19$m=19456,t=2,p=1$qgyrgT+9yg8mR6bSxONltg$rx8M6ij/tXDIpZArkvYO+CckotR2LURHHUL8k1DFYEY";
const USER_RECOVERY_CODE_7_HASH = "$argon2id$v=19$m=19456,t=2,p=1$92JwMZwwcg7PdhAWftW92Q$MlIQbeU8BwbN179y85U5Hq93I+i3AXgnlHCo603kIYU";
const USER_RECOVERY_CODE_8_HASH = "$argon2id$v=19$m=19456,t=2,p=1$YKmXaetPzM8bYLq2ND04uw$/t3glrAUrPYMJTG35z2Qn418Ibpx6VR+9s9rcB83+6s";
// "27E6-4F3F", "36A6-5214", "FBBE-C584", "1BBC-EB91", "C0EC-BBAE", "40A3-8BFC", "AB67-D15D", "428D-3738"

const dataset = [
    {
        id: "b1f1dee0-0f8f-49b2-9f21-0da13992e804",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_1_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "24624d70-9933-449f-a3b4-aed53cf7ec74",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_2_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "18ee76b9-e8cc-46e7-acdb-f16d189e2c79",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_3_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "d55e0e29-ee9d-474f-b72e-8ac00edc1268",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_4_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "16d7a9f3-1db7-4be6-ae1f-bfadfa100cdb",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_5_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "2d6244d7-4696-45ef-b3a0-650146d6f97b",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_6_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "a4dd7ef9-805f-42ab-a8e5-9bd6093764cd",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_7_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "22ffe49c-0065-4792-995a-4d793e0d9f3e",
        account_id: ADMIN_ACCOUNT_ID,
        hash: ADMIN_RECOVERY_CODE_8_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "96c2630a-3950-4cd8-b9fd-76069b9a9b75",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_1_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "9118b513-480a-41d4-a202-b690abf62034",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_2_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "df98dcb5-cf91-46aa-b7e2-2c92d94f6766",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_3_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "8e7d8d06-a7a8-4e5f-95c0-46bd80a56804",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_4_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "2549ad83-9fb9-4124-aa9f-8a98da46b072",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_5_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "6e61affd-6aaa-4ade-8dd3-d9b04f96e273",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_6_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "7d344fb1-45a4-42fc-b37f-a92777989535",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_7_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
    {
        id: "cbd5e548-ade1-481d-872d-e47586596a67",
        account_id: USER_ACCOUNT_ID,
        hash: USER_RECOVERY_CODE_8_HASH,
        used_at: null,
        created_at: CREATED_AT,
    },
];

export const RecoveryCodes = {
    name: "recovery_code",
    postgresql: dataset,
};
