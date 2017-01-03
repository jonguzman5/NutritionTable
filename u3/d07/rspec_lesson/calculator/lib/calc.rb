class Calculator
  def add(a, b)
    a + b
  end
  def subtract(a,b)
    a - b
  end
  def power(a, b)
    a ** b
  end
  def sum(arr)
    arr.reduce(0) {|prev, curr| prev + curr}
    # arr.reduce(0, :+)
  end
  def multiply(*args)
    args.reduce(1) {|prev, curr| prev * curr}
  end
  def factorial(num)
    # 1 if num <=1
    (1..num).reduce(1) {|curr, prev| curr * prev} || 1
  end
    def factorial(num)
      return nil unless num >= 0
      (1..num).reduce(1) {|curr, prev| curr * prev} || 1
  end

end
