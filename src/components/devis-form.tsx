import { useState } from "react";
import { toast } from "sonner";

const field =
  "h-11 w-full rounded-sm border border-input bg-secondary px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";
const label = "block font-display text-xs uppercase tracking-[0.18em] text-muted-foreground";

export function DevisForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="grid gap-5 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        // À brancher sur l'envoi d'e-mail une fois l'adresse de l'entreprise confirmée.
        setTimeout(() => {
          setSending(false);
          toast.success("Votre demande a bien été enregistrée.", {
            description: `Vous pouvez aussi nous joindre directement au 04 90 46 95 83.`,
          });
          (e.target as HTMLFormElement).reset();
        }, 500);
      }}
    >
      <div>
        <label className={label} htmlFor="nom">
          Nom *
        </label>
        <input id="nom" name="nom" required className={`${field} mt-2`} placeholder="Votre nom" />
      </div>
      <div>
        <label className={label} htmlFor="societe">
          Société
        </label>
        <input id="societe" name="societe" className={`${field} mt-2`} placeholder="Votre société" />
      </div>
      <div>
        <label className={label} htmlFor="telephone">
          Téléphone *
        </label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          required
          className={`${field} mt-2`}
          placeholder="06 00 00 00 00"
        />
      </div>
      <div>
        <label className={label} htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`${field} mt-2`}
          placeholder="vous@societe.fr"
        />
      </div>
      <div className="md:col-span-2">
        <label className={label} htmlFor="type">
          Type de projet
        </label>
        <select id="type" name="type" className={`${field} mt-2`} defaultValue="">
          <option value="" disabled>
            Sélectionnez
          </option>
          <option>Chaudronnerie</option>
          <option>Soudure</option>
          <option>Fabrication métallique</option>
          <option>Projet sur mesure</option>
          <option>Autre / à préciser</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-sm border border-input bg-secondary p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary"
          placeholder="Décrivez votre besoin : pièces, matériaux, quantités, délais…"
        />
      </div>
      <div className="md:col-span-2">
        <label className={label} htmlFor="piece">
          Pièce jointe (plan, photo, cahier des charges)
        </label>
        <input
          id="piece"
          name="piece"
          type="file"
          className="mt-2 w-full rounded-sm border border-input bg-secondary p-2.5 text-sm text-muted-foreground file:mr-3 file:rounded-sm file:border-0 file:bg-accent file:px-3 file:py-1.5 file:text-foreground"
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-6 font-display text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {sending ? "Envoi…" : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
