export interface IRFIDTag {
    id: string;
    tagNumber: string;
    isActive: boolean;
    assignedTo?: string;
    assignedToName?: string;
    createdAt: string;
    updatedAt: string;
}

export interface IRFIDTagForm {
    tagNumber: string;
    isActive: boolean;
    assignedTo?: string;
}

export interface IRFIDTagFilters {
    search?: string;
    isActive?: boolean;
    assignedTo?: string;
}

export interface IRFIDTagPagination {
    page: number;
    pageSize: number;
    total: number;
} 