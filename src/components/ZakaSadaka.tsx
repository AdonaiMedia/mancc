import Image from "next/image";

const paymentMethods = [
  {
    name: "TAG Magomeni All Nations",
    type: "Lipa Namba",
    number: "119556159",
    image: "/payments/crdb.tag-magomeni.jpg",
  },
  {
    name: "TAG Magomeni All Nations",
    type: "NMB Lipa Namba",
    number: "12386006",
    image: "/payments/nmb-tag-magomeni.jpg",
  },
  {
    name: "TAG Magomeni",
    type: "Airtel Money",
    number: "783406197",
    image: "/payments/airtel-tag-magomeni.jpg",
  },
];

export default function ZakaSadaka() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">
            Zaka na Sadaka
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Toa Zaka au Sadaka
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Unaweza kutoa zaka au sadaka yako kwa kutumia mojawapo ya njia
            zifuatazo. Scan QR code au tumia Lipa Namba iliyoonyeshwa.
          </p>
        </div>

        {/* Payment Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {paymentMethods.map((method) => (
            <article
              key={method.number}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Payment Image */}
              <div className="relative aspect-[3/4] w-full bg-slate-100">
                <Image
                  src={method.image}
                  alt={`${method.name} - ${method.type}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              {/* Payment Details */}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  {method.type}
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {method.name}
                </h3>

                <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3">
                  <p className="text-xs font-medium text-slate-500">
                    Namba ya Malipo
                  </p>

                  <p className="mt-1 text-2xl font-bold tracking-wider text-slate-900">
                    {method.number}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center">
          <p className="text-sm leading-6 text-blue-900">
            Kwenye maelezo ya malipo, unaweza kutaja madhumuni ya utoaji wako,
            kwa mfano <strong>zaka</strong> au <strong>sadaka</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

