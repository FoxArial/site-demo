interface IZodErrorsProps {
  error?: string[];
}

export function ZodErrors({ error }: IZodErrorsProps) {
  if (!error) return null;
  return error.map((err: string, index: number) => (
    <div key={index} className="error-text text-tiny">
      {err}
    </div>
  ));
}
