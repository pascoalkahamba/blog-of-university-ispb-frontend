import { Container } from "@mantine/core";
import classes from "./styles.module.css";

export function AuthFooter() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p className="italic">
          Blog do Instituto Superior de Politecnico de Benguela - © Todos os
          direitos reservados
        </p>
      </Container>
    </div>
  );
}
