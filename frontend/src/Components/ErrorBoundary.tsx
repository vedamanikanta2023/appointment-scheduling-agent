import React from "react";

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  reason?: string;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, reason: "" };
  }

  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("Logged Error: ", error, "errorInfo", errorInfo);
    this.setState({
      hasError: true,
      reason: error.message,
    });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <h1>
            Something went wrong. Please refresh.{" "}
            {this.state.reason}
          </h1>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
