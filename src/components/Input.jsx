import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="kuch to likh bhai..."/>
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{display: 'none'}} id="file"/>
        <label htmlFor="file">
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAt1BMVEXZ5Oj///8UHzh509MRHTfc5+sYGjTZ2dy7xcq9yc0AAB7f6u6mrrQAACTn8/YAETCQmaBtdH4ACy1cZXHL19sIFjKvub8AABFCSVgiJTsAACEDAChQjJJ92tpns7ZVXGq1trsAAADFxsqIkJl/h5Gbm6I5QlMhK0LO0NRJUV9oanSlp62YoqkIDyosLkHt7u9fpqoYHDAAABl5en82XWkeM0VJgIgoRlU/bXdwxMUwU2A9QkxeX2fwUHGPAAAFGUlEQVR4nO3ca3eiOhQGYKrBikgRJDhCrWOlVq2DU+d2Ts/8/991kItVSAhsEuzMyv7qWvj4EkKMspUbeu3XT9bquQMqNP1ccmRGKdRX1t9WnmFjmClSfXnkjlrPFzaCghKVAc6KgnrBdiNRs6yIqP3vSbOUUpUHzIqE2m8NDqQOPCsSajs4HRX73qB+eeikAmVFQD152SHt3ibYDQG1OqkMSFZF1Dr7nH64dO50SKmfcKdJVkXUxkwOZ88dXVVg9Y6KRnv9rAqoz+kgPwRg0gUKklUBtU2Cssc6mHSJAoyrPOrWiEcUWjUg5VD1s8qjXpLpYDBsElSGQgg2rvKoeXz2kHnHISn8/QcGZZVHhfGH861GQaUo//6hA1LlUPtpjPKanb0Tava1gwCqHOr2NT6I6cKngwvUDJRVHtU7olCnzwnVjbLq1VaJRnVnD6h2VsJR3fNxVXFmEI86z6riqq8FVJRVNovi10pZtYGKssLZaK/0baIVVJTVlzrjqh1UzXHVEuo4rtIziNlZtYXqns3tzKxaQ53NV8ys2kN1q98HhaJ+XqDO7oOMrMSgkqUi/n6JqpyVEJRqxdsj6Fc3V1FWqQqXrZCFoPRlsmeDHwqqSlmJSWqYXGf2PzNQVmLGlJMs9TvGA0nFXPUJQll+ksZb3nR+BqlZiUFprplE5b91S7LCr+SsBCWlWdk2yS/CGXzPijxfiUL1s3uKje//nc3ys+hz6apPFErbZTu5yEZv918fLus+e5WYlTCUlo71+J0Lm5RnrxGyEoNSIpRjVduIJ2QlBqVqx7IG1VSFrAQldTx/mjOamtVUt62glDgqzd0cTHZaqNcSKlU57jxk/urUGkp1tLTckbWyDxNiJYOuvaQU7VSO42jkGrZ8+s5V1GofVUF1BRRbdQ2UShtL10Qp6Sz60VBqKetKqCMrKodcbrzqugKqzNuXKImSKImSKImSKImSKImSqIYolVbXQ+mOSykH8o8dLii9/x+2yRUGgH9c8UCpDnW7EKHJqH5WPFD6aEAxRYU3tU18UIFPR6GVcx3UriypeW0Tp6vvk48ohRfudcZUNNLnU0qtIP/i45OUqlO2Txz1avOUQp/RAaS//N4nUX8ySgU9XkD7uz2npYu2GwFqqJEnDD5Ll6E5MAA1MMlTK5elSx/6eBayKQfkcENeeqx3p5W3JEXFZ+kCfhzKCIShhhMoakIcVHyuPuuAaWuXssIHi3g4PksXJQgBKhwGCvl4fCZP/Q5UlHXN33ybkSiJ4o3SQZefLvTq011rDCiL8p2QDypY2Cag7EUgDKX2PejSxRO3dPmQq4SPiFJd+OkjPpvHZ40e+JTdRUb5xKB4TQlDC1SULRlekyd1y7q05NJFoiRKoiRKoiRKosShGjdxqIpyk44fjKdBOLW7qFj6MN5ERdN9KYpTY5CqqOTRKBTelKPSFip+sxYqVVF+MljmDBSfZjMVTcnZ6wxeGKhTWx5H+FBXnaRNFTJuGSg+DYwqlT5OHvIzt3lDAcWl1VOFUvXgkLxTsdlEAcWlKVYFkjNPH4Y0NwVCEcWhfRiz7pxl6Gff6NcVUDwarZXXLtj0Tr+HeU9FAQF18/v0YxUyDUhLOlbHOuP9ob9BYZRTUNya97HL2O4JABIqmhe4tDlkFpqQcqKhuDSEZJbdy0/l5aib9bhp60xGIXsxLl535ahjk9GwSZPRssK24YXfaKQyVHQffIS3Yy2r55X19Ji/353X/9Uf490T7oysAAAAAElFTkSuQmCC" alt="" /> */}
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
