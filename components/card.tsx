interface Props {
  data: {
    name: string,
    price_annual: number,
    price_monthly: number,
    storage: string,
    users: number,
    send: number,
  },
  monthly: boolean
}

const Card = ({ data, monthly }: Props) => {
  const {name, price_monthly, price_annual, storage, users, send} = data

  return (
    <div
      className={`rounded-lg p-6 my-4 text-center shadow-2xl 
        shadow-[color:var(--secondary-color)]
        basis-full lg:basis-1/3 max-w-[22rem] relative 
        ${
          name === "professional"
            ? "md:z-10 md:py-12 bg-[color:var(--primary-color)] text-white"
            : "md:z-0 bg-white"
        }`}
    >
      <h2 className="capitalize text-lg my-2">{name}</h2>
      <div
        className={`divide-y-[0.75px] ${name === "professional"
          ? "divide-[color:var(--secondary-color)]"
          : "divide-[color:var(--grayish-blue)]"}`
        }
      >
        <div className="text-5xl flex justify-center items-center my-2">
          $
          <span className="text-7xl ml-1">
            {monthly ? price_monthly : price_annual}
          </span>
        </div>
        <div className="py-2 text-base leading-9">{`${storage} Storage`}</div>
        <div className="py-2 text-base leading-9">{`${users} Users Allowed`}</div>
        <div className="py-2 text-base leading-9">{`Send up to ${send} GB`}</div>
        <div>
          <button
            className={`border rounded-lg mt-6 py-3 w-full uppercase text-sm
              tracking-widest
              ${name === "professional"
                ? "text-[color:var(--primary-color)] bg-white  hover:text-white hover:bg-[color:var(--primary-color)]"
                : "text-white bg-gradient-to-r from-[color:var(--secondary-color)] to-[color:var(--primary-color)] hover:bg-none hover:text-[color:var(--primary-color)] hover:outline hover:outline-[color:var(--primary-color)] hover:outline-1 "}
              `}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
