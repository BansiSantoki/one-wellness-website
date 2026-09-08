import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'outline' | 'ghost' | 'light';
type Size = 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-sans font-medium tracking-wide transition-[background-color,border-color,color,transform,box-shadow] duration-200 ease-calm disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
  'bg-forest text-ivory hover:bg-forest-soft shadow-soft hover:shadow-lift active:translate-y-px',
  outline:
  'border border-forest/25 text-forest hover:border-brass hover:text-brass-dark bg-transparent',
  ghost: 'text-forest hover:text-brass-dark',
  light:
  'border border-white/45 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/70'
};

const sizes: Record<Size, string> = {
  md: 'text-[0.8rem] px-5 py-2.5',
  lg: 'text-[0.85rem] px-7 py-3.5'
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
}

interface LinkButtonProps extends CommonProps {
  to: string;
  href?: never;
}

interface AnchorButtonProps extends CommonProps {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

interface NativeButtonProps extends
  CommonProps,
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  to?: never;
  href?: never;
}

export function Button(
props: LinkButtonProps | AnchorButtonProps | NativeButtonProps)
{
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>);

  }

  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props as AnchorButtonProps;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={rest['aria-label']}
        className={classes}>
        
        {children}
      </a>);

  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
  props as NativeButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>);

}