# Куки:

Для выполнения задачи следует создать компонент с селектом и чекбоком, в зависимости от нажатого чекбокса,
данные из селекта будут либо сохраняться в куки (срок хранения 15 минут) либо нет. 
(Задача предполагает, что для работы с cookie не будут использоваться сторонние библиотеки).

# REST API:

Реализуйте страницу с отображением списка пользователей.
Для каждого пользователя отображайте его имя и информацию о компании.
Так же следует реализовать действия добавления удаления и редактирования.
Используйте данные из API JSONPlaceholder
https://jsonplaceholder.typicode.com/users

При выполнении задачи допустимым является использование сторонних библиотек таких как axios/tanstack query.

# Store set, get (pinia)

Для выполнения задачи следует добавить в store массив объектов, в который можно будет что-либо добавить, удалить или редактировать, удаление и редактирование будет происходить строго по id. (Задача предполагает редактирование вложенных элементов объекта).

Элементы массива будут в таком виде:

```js
[
  {
    id: 1,
    title: 'sample text',
    description: 'sample',
    assignedUser: {
      id: 1,
      name: 'sample',
      email: 'sample@sample.com'
    }
  }, {
    id: 2,
    title: 'sample text2',
    description: 'sample2',
    assignedUser: {
      id: 2,
      name: 'sample2',
      email: 'sampl2e@samp2le.com'
    }
  }
]
```

