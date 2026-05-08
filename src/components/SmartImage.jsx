export default function SmartImage({ src, alt, className, ...rest }) {
  return <img {...rest} className={className} src={src} alt={alt} />;
}
