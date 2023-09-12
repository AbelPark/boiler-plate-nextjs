import { css } from '@emotion/react';

const ellipsis = css`
  display: block;
  max-width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { ellipsis };
