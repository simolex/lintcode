# <kbd>3661</kbd> Missing Element in Sorted Array

<kbd>medium</kbd>
[<kbd>lintcode</kbd>](https://www.lintcode.com/problem/3661/)

Now there is an array of integers nums in strictly ascending order, and there are no identical elements in nums.

Given an integer $k$, find and return the $k$-th missing numeric element in nums, starting from the left.

<details>
<summary>Форматы ввода/вывода и примеры</summary>

## Ограничения

$1 \leq nums.length \leq 10^5$

$1 \leq nums[i] \leq 10^7$

$1 \leq k \leq 10^8$

### Пример 1

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>nums = [1,3,5,7,9]
k = 1
</code></pre></td>

<td><pre>
<code>2
</code></pre></td>
</tr>
</table>

### Пример 2

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>nums = [1,3,5,7,9]
k = 4
</code></pre></td>

<td><pre>
<code>8
</code></pre></td>
</tr>
</table>

### Пример 3

<table width = "100%">
<tr>
<th>Ввод</th> <th>Вывод</th>
</tr>
<tr valign="top">
<td><pre>
<code>nums = [2,3,4,5,7]
k = 4
</code></pre></td>

<td><pre>
<code>10
</code></pre></td>
</tr>
</table>

</details>

<details>
<summary>Решение <kbd>javascript</kbd></summary>

### 1. Установка зависимостей

```bash
npm install             # Установка зависимостей
```

### 2. Запуск тестирования решения в среде Jest[^1]

```bash
npm run test            # Unit-тестирование
```

</details>

#### Ссылки на документацию

[^1]: [Jest](https://jestjs.io/docs/getting-started)
