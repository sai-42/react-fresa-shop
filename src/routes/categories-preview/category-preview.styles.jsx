import styled from 'styled-components';

export const CategoryPreviewContainer = style.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const Title = style.div`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const Preview = style.div`
  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`