import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { wellnessGoals } from '../../data/content';
import { Button } from '../ui/Button';

export interface LeadFormValues {
  name: string;
  mobile: string;
  whatsapp: string;
  preferredDate: string;
  goal: string;
  interests: string[];
}

type Errors = Partial<Record<keyof LeadFormValues, string>>;

const emptyValues: LeadFormValues = {
  name: '',
  mobile: '',
  whatsapp: '',
  preferredDate: '',
  goal: '',
  interests: []
};

/**
 * Front-end only. `submitLead` is the single integration point —
 * swap the body for an API / CRM call when the backend is available.
 */
async function submitLead(values: LeadFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  // eslint-disable-next-line no-console
  console.info('Lead enquiry (no backend connected):', values);
}

const inputClass =
'w-full rounded-sm border border-forest/15 bg-ivory px-4 py-3 font-sans text-sm text-forest-deep placeholder:text-earth-light/70 transition-colors duration-200 ease-calm focus:border-brass focus:outline-none';

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const reduced = useReducedMotion();

  const set = <K extends keyof LeadFormValues,>(key: K, value: LeadFormValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleInterest = (goal: string) => {
    setValues((v) => ({
      ...v,
      interests: v.interests.includes(goal) ?
      v.interests.filter((g) => g !== goal) :
      [...v.interests, goal]
    }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{8,15}$/.test(values.mobile.trim()))
    next.mobile = 'Please enter a valid mobile number.';
    if (values.whatsapp.trim() && !/^[0-9+\s-]{8,15}$/.test(values.whatsapp.trim()))
    next.whatsapp = 'Please enter a valid WhatsApp number.';
    if (!values.goal.trim()) next.goal = 'Please tell us your wellness goal.';
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus('submitting');
    try {
      await submitLead(values);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="rounded-sm border border-forest/12 bg-ivory p-6 shadow-soft sm:p-9">
      <AnimatePresence mode="wait">
        {status === 'success' ?
        <motion.div
          key="success"
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="py-10 text-center"
          role="status"
          aria-live="polite">
          
            <CheckCircle2Icon
            className="mx-auto h-10 w-10 text-brass"
            strokeWidth={1.25}
            aria-hidden="true" />
          
            <h3 className="mt-6 font-serif text-3xl font-light text-forest-deep">
              Thank you, {values.name.split(' ')[0]}.
            </h3>
            <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-[1.85] text-earth">
              Your enquiry has been recorded. Our team will get in touch during clinic
              working hours to discuss the Ayurvedic consultation and next steps.
            </p>
            <Button
            variant="outline"
            className="mt-8"
            onClick={() => {
              setValues(emptyValues);
              setStatus('idle');
            }}>
            
              Submit Another Enquiry
            </Button>
          </motion.div> :

        <motion.form
          key="form"
          onSubmit={handleSubmit}
          noValidate
          initial={false}
          className="space-y-5"
          aria-label="Ayurvedic consultation enquiry">
          
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" id="lead-name" error={errors.name} required>
                <input
                id="lead-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => set('name', e.target.value)}
                aria-invalid={Boolean(errors.name)}
                className={inputClass}
                placeholder="Your full name" />
              
              </Field>

              <Field label="Mobile Number" id="lead-mobile" error={errors.mobile} required>
                <input
                id="lead-mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={values.mobile}
                onChange={(e) => set('mobile', e.target.value)}
                aria-invalid={Boolean(errors.mobile)}
                className={inputClass}
                placeholder="Mobile number" />
              
              </Field>

              <Field label="WhatsApp Number" id="lead-whatsapp" error={errors.whatsapp}>
                <input
                id="lead-whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="tel"
                value={values.whatsapp}
                onChange={(e) => set('whatsapp', e.target.value)}
                aria-invalid={Boolean(errors.whatsapp)}
                className={inputClass}
                placeholder="If different from mobile" />
              
              </Field>

              <Field label="Preferred Date" id="lead-date">
                <input
                id="lead-date"
                name="preferredDate"
                type="date"
                value={values.preferredDate}
                onChange={(e) => set('preferredDate', e.target.value)}
                className={inputClass} />
              
              </Field>
            </div>

            <Field label="Your Wellness Goal" id="lead-goal" error={errors.goal} required>
              <textarea
              id="lead-goal"
              name="goal"
              rows={4}
              value={values.goal}
              onChange={(e) => set('goal', e.target.value)}
              aria-invalid={Boolean(errors.goal)}
              className={`${inputClass} resize-y`}
              placeholder="What would you like your Ayurvedic journey to support?" />
            
            </Field>

            <fieldset>
              <legend className="font-sans text-[0.6rem] uppercase tracking-eyebrow text-earth-light">
                I am interested in
              </legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {wellnessGoals.map((goal) => {
                const checked = values.interests.includes(goal);
                return (
                  <label
                    key={goal}
                    className={`cursor-pointer rounded-sm border px-4 py-2.5 font-sans text-sm transition-colors duration-200 ease-calm ${
                    checked ?
                    'border-brass bg-brass/10 text-forest-deep' :
                    'border-forest/15 text-earth hover:border-brass/50'}`
                    }>
                    
                      <input
                      type="checkbox"
                      name="interests"
                      value={goal}
                      checked={checked}
                      onChange={() => toggleInterest(goal)}
                      className="sr-only" />
                    
                      {goal}
                    </label>);

              })}
              </div>
            </fieldset>

            {status === 'error' &&
          <p role="alert" className="font-sans text-sm text-red-700">
                Something went wrong. Please try again or reach us on WhatsApp.
              </p>
          }

            <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === 'submitting'}>
            
              {status === 'submitting' &&
            <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
            }
              {status === 'submitting' ? 'Submitting…' : 'Submit Enquiry'}
            </Button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}

interface FieldProps {
  label: string;
  id: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, id, error, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-sans text-[0.6rem] uppercase tracking-eyebrow text-earth-light">
        
        {label}
        {required && <span className="ml-1 text-brass">*</span>}
      </label>
      <div className="mt-2.5">{children}</div>
      {error &&
      <p className="mt-2 font-sans text-xs text-red-700" role="alert">
          {error}
        </p>
      }
    </div>);

}