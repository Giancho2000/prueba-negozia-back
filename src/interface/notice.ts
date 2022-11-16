export interface NoticeResponse{
    isSuccess: boolean;
    errorMessage?: string;
}

export interface Notice {
    execute(
    title: string,
    text: string,
    tags: string
    ): NoticeResponse
}
