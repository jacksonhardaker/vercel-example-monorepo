import { ReactNode } from "react"

type ComplexObject = {
  date: Date,
  random: Number,
}

type TypescriptComponentProps = {
  myString: String,
  myInt: Number,
  myComplexObj: ComplexObject,
  children?: ReactNode,
}

export const TypescriptComponent = ({ myString, myInt, myComplexObj, children }: TypescriptComponentProps) => {

  const renderComplexObject = () => {
    return (
      <div>
        <p>myComplexObj</p>
        <hr />
        <p>myComplexObj.date: {myComplexObj.date.toString()}</p>
        <p>myComplexObj.random: {myComplexObj.random}</p>
      </div>
    )
  }

  return (
    <>
      <p>myString: {myString}</p>
      <p>myInt: {myInt}</p>
      {renderComplexObject()}
      {children && <div>{children}</div>}
    </>
  )
}
