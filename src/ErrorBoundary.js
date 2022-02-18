import React from "react";
import CardPlaceholder from "./CardPlaceholder";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <CardPlaceholder
          error={true}
          text="Ha ocurrido un error con alguna tarjeta."
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
