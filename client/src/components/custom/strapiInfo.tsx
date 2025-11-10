type TStrapiInfo = {
  status: number;
  name: string;
  message: string;
  details?: Record<string, string[]>;
};

interface IStrapiInfoProps {
  error?: TStrapiInfo | null;
  success?: TStrapiInfo | null;
}

export function StrapiInfo({ error, success }: IStrapiInfoProps) {
  if (error?.message) {
    return <div className="error-text text-tiny">{error.message}</div>;
  }
  if (success?.message) {
    return <div className="success-text text-tiny">{success.message}</div>;
  }
  return null;
}
