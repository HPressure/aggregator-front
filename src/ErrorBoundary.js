import React from "react";
import NetworkError from "./NetworkError";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <NetworkError />;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
