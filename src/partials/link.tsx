import { Link as RouterLink } from "react-router-dom";
import { Link } from "@dannychambers/bateson-web-components";

interface ReactLinkProps {
  appearance?: "body-1" | "body-2" | "body-3";
  icon?: "arrow";
  iconPosition?: "before" | "after";
  to: string;
  children: React.ReactNode;
}

const ReactLink: React.FC<ReactLinkProps> = ({
  to,
  icon,
  appearance,
  children,
}) => {
  return (
    <RouterLink to={to}>
      <Link appearance={appearance} {...(icon && { icon })}>
        {children}
      </Link>
    </RouterLink>
  );
};

export default ReactLink;
