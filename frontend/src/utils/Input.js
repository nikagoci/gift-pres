const Input = ({ label, name, type, getName, error }) => {
  return (
    <div className="flex flex-col mb-4 gap-y-2">
      <label htmlFor={label} className='text-lg font-medium'>{name}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={`${error ? error.message : 'Please Enter ' + name}`}
        className={`${error ? 'outline-rose-600' : 'outline-none'} px-4 py-2 rounded-xl`}
        {...getName(label)}
      />
    </div>
  );
};

export default Input;