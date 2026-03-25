import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";
import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Covers the fundamentals of programming, algorithms, and computer systems.",
        createdAt: "2026-03-25T00:00:00.000Z",
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Mathematics",
        description: "Introduces vectors, matrices, determinants, and their applications in problem solving.",
        createdAt: "2026-03-25T00:00:00.000Z",
    },
    {
        id: 3,
        code: "BUS150",
        name: "Principles of Management",
        department: "Business Administration",
        description: "Explores core management concepts, leadership, planning, and organizational behavior.",
        createdAt: "2026-03-25T00:00:00.000Z",
    },
];

export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>(
        { resource }: GetListParams
    ): Promise<GetListResponse<TData>> => {
        if (resource !== "subjects") {
            return { data: [] as TData[], total: 0 };
        }

        return {
            data: MOCK_SUBJECTS as unknown as TData[],
            total: MOCK_SUBJECTS.length,
        };
    },

    getOne: async () => { throw new Error("Cette fonction n'est pas présente dans la simulation") },
    create: async () => { throw new Error("Cette fonction n'est pas présente dans la simulation") },
    update: async () => { throw new Error("Cette fonction n'est pas présente dans la simulation") },
    deleteOne: async () => { throw new Error("Cette fonction n'est pas présente dans la simulation") },

    getApiUrl: () => "https://mock.local",
};