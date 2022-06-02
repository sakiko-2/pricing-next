interface Props {
  checked: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Toggle = ({ checked, handleChange }: Props) => (
  <label
    className="flex justify-between items-center p-2 text-sm
    text-[color:var(--dark-grayish-blue)] relative"
  >
    <span aria-hidden="true">Annually</span>
    <input
      type="checkbox"
      className="appearance-none peer absolute left-0 top-0 w-full h-full rounded-md cursor-pointer"
      onChange={handleChange}
      checked={checked}
    />
    <span
      className="w-16 h-10 flex items-center mx-4 p-1 bg-[color:var(--primary-color)]
      hover:opacity-75 rounded-full after:w-8 after:h-8 after:bg-white
      after:rounded-full after:shadow-md after:duration-300 ease-in-out
      peer-checked:after:translate-x-6"
    ></span>
    Monthly
  </label>
)

export default Toggle
