const Constants = {
  HTTP_CODE: {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    FROBIDDEN: 403
  },
} as const;

export { Constants };
