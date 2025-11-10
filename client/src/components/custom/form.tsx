"use client";

import { FormElement } from "@/models/GlobalElements";
import { useActionState, useEffect, useRef } from "react";
import { sendInfo } from "@/data/contact-us-actions";
import { FormState } from "@/utils/validationForm";
import { ZodErrors } from "./zodErrors";
import { StrapiInfo } from "./strapiInfo";

type FormProps = {
  data: FormElement;
};

type FieldName = keyof NonNullable<FormState["data"]>;

function isFieldName(value: string): value is FieldName {
  return ["name", "email", "phone", "message"].includes(value);
}

const INITIAL_STATE: FormState = {
  success: false,
  strapiErrors: null,
  zodErrors: null,
};

export default function Form({ data }: FormProps) {
  const { title, description, inputs, cta } = data;
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useActionState(sendInfo, INITIAL_STATE);

  useEffect(() => {
    if (formState.success) {
      const timer = setTimeout(() => {
        formRef.current?.reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formState.success]);

  return (
    <form className="form gap-between" action={formAction}>
      <div className="form-header">
        <div className="form-title">
          {title.map((item) => (
            <p
              key={item.id}
              className={`text-${item.color} textWeight-${item.fontWeight} text-smallTitle`}
            >
              {item.label}{" "}
            </p>
          ))}
        </div>
        <div className="form-description">
          <p
            className={`text-${description.color} textWeight-${description.fontWeight} text-main`}
          >
            {description.label}
          </p>
        </div>
      </div>

      <div className="form-inputs">
        {inputs.map((item) => {
          const fieldName = item.label.label.toLowerCase();
          if (isFieldName(fieldName)) {
            if (fieldName === "message") {
              return (
                <div key={item.id} className="form-field">
                  <textarea
                    name="message"
                    placeholder={item.placeholder.label}
                    defaultValue={formState?.data?.[fieldName] || ""}
                    className={
                      formState?.zodErrors?.[fieldName]
                        ? "input error"
                        : "input"
                    }
                  />
                  <ZodErrors error={formState?.zodErrors?.[fieldName]} />
                </div>
              );
            }

            return (
              <div key={item.id} className="form-field">
                <input
                  name={fieldName}
                  type={item.type}
                  placeholder={item.placeholder.label}
                  defaultValue={formState?.data?.[fieldName] || ""}
                  className={
                    formState?.zodErrors?.[fieldName] ? "input error" : "input"
                  }
                />
                <ZodErrors error={formState?.zodErrors?.[fieldName]} />
              </div>
            );
          }
        })}
      </div>
      <div className="full-width">
        <button type="submit" className={`button-${cta.theme} button-style`}>
          <p
            className={`text-${cta.label.color} textWeight-${cta.label.fontWeight}`}
          >
            {cta.label.label}
          </p>
        </button>
        <StrapiInfo
          error={formState?.strapiErrors}
          success={
            formState?.success
              ? {
                  status: 200,
                  name: "Success",
                  message: "Info sent successfully!",
                }
              : null
          }
        />
      </div>
    </form>
  );
}
