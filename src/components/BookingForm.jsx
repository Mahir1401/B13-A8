import { Form, Label, Input, TextField, FieldError } from "@heroui/react";

const BookingForm = () => {
  return (
    <Form className="mt-8 flex flex-col gap-4 text-white">
      <TextField isRequired name="name" validate={(value) => { if (value.length < 3) { return "Name must be at least 3 characters"; } return null; }}>
        <Label className="text-xs uppercase tracking-widest text-gray-400">
          Full name
        </Label>
        <Input
          name="name"
          placeholder="Your name"
          className="mt-1.5 w-full rounded-lg border border-green-800 bg-transparent px-4 py-2.5 text-sm outline-none"
        />
        <FieldError className="text-xs text-red-500 mt-1" />
      </TextField>

      <TextField isRequired name="email">
        <Label className="text-xs uppercase tracking-widest text-gray-400">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="mt-1.5 w-full rounded-lg border border-green-800 bg-transparent px-4 py-2.5 text-sm outline-none"
        />
        <FieldError className="text-xs text-red-500 mt-1" />
      </TextField>

      <TextField isRequired name="phone">
        <Label className="text-xs uppercase tracking-widest text-gray-400">
          Phone
        </Label>
        <Input
          type="tel"
          name="phone"
          placeholder="01XXXXXXXXX"
          className="mt-1.5 w-full rounded-lg border border-green-800 bg-transparent px-4 py-2.5 text-sm outline-none"
        />
        <FieldError className="text-xs text-red-500 mt-1" />
      </TextField>

      <TextField isRequired name="address">
        <Label className="text-xs uppercase tracking-widest text-gray-400">
          Delivery Address
        </Label>
        <textarea
          name="address"
          rows={3}
          placeholder="House, road, area, district"
          className="mt-1.5 w-full rounded-lg border border-green-800 bg-transparent px-4 py-2.5 text-sm outline-none resize-none"
        />
        <FieldError className="text-xs text-red-500 mt-1" />
      </TextField>

      <button
        type="submit"
        className="btn btn-soft rounded-4xl py-3.5 text-xs font-semibold uppercase tracking-widest text-white cursor-pointer"
      >
        Confirm Booking
      </button>
    </Form>

  );
};

export default BookingForm;
