const Input = ({ label, name, type, getName, error }) => {

  return (
    <div className="flex flex-col mb-4 gap-y-2">
      <label htmlFor={label} className='text-lg font-medium'>{name}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={'Please Enter ' + name}
        className={`${error?.message ? 'border border-rose-600 bg-rose-200 placeholder-slate-700' : 'border-none'} focus:outline-none px-4 py-2 rounded-xl`}
        {...getName(label)}
      />
      {error && <p className="text-xs text-red-500">{error?.message}!</p>}
    </div>
  );
};

export default Input;
