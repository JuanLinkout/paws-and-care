import { ButtonSizes, ButtonVariants } from './types'
import styled, { css, DefaultTheme } from 'styled-components'
import { IMargin } from '@services/types/css'
import { applyMargin } from '@utils/functions/applyCss'
import { motion } from 'framer-motion'

export interface ContainerProps extends IMargin {
  variant: ButtonVariants
  width?: string
  height?: string
  size: ButtonSizes
}

const buttonVariants: Record<ButtonVariants, any> = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.white};

    :hover {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    &:disabled {
      background-color: ${({ theme }) => `${theme.colors.primary}1A`};
      color: ${({ theme }) => theme.colors.white};
      cursor: not-allowed;

      path,
      g {
        stroke: ${({ theme }) => theme.colors.darkSurface};
      }
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.border};
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.textPrimary};
    path,
    g {
      stroke: ${({ theme }) => theme.colors.textPrimary};
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.darkSurface};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.white};
      border: solid 1px ${({ theme }) => theme.colors.whiteHover};
      color: ${({ theme }) => theme.colors.darkSurface};
      cursor: not-allowed;
      path,
      g {
        stroke: ${({ theme }) => theme.colors.darkSurface};
      }
    }
  `,
  tertiary: css`
    background-color: ${({ theme }) => theme.colors.white};
    border: solid 1px ${({ theme }) => theme.colors.primary};
    transition: all 0.15s ease-in-out;
    color: ${({ theme }) => theme.colors.primary};
    path,
    g {
      stroke: ${({ theme }) => theme.colors.primary};
    }

    :hover {
      opacity: 0.7;
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.white};
      border: solid 1px ${({ theme }) => theme.colors.whiteHover};
      color: ${({ theme }) => theme.colors.darkSurface};
      cursor: not-allowed;
      path,
      g {
        stroke: ${({ theme }) => theme.colors.darkSurface};
      }
    }
  `
}

const paddingSize: Record<ButtonSizes, any> = {
  small: css`
    padding: 4px 8px;
  `,
  medium: css`
    padding: 8px 12px;
  `,
  large: css`
    padding: 12px 12px;
  `,
  xsmall: css`
    padding: 4px;
  `
}

export const LoadingContainer = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface Props {
  loading?: boolean
}

export const ContentContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;

  opacity: ${({ loading }) => (loading ? 0 : 1)};
`

export const Container = styled.button<ContainerProps>`
  border-width: 1px;
  position: relative;

  column-gap: 0.5rem;
  white-space: nowrap;

  width: ${({ width }) => width || 'fit-content'};
  height: ${({ height }) => height || '2.5rem'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  cursor: pointer;

  ${({ size }) => paddingSize[size]};
  ${({ variant }) => buttonVariants[variant]};
  ${props => applyMargin(props)};
`
