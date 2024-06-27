<p align="center">
  <a href="https://github.com/viseliza" target="blank"><img src="https://img.freepik.com/free-vector/real-estate-banners_98292-561.jpg?w=826&t=st=1719520562~exp=1719521162~hmac=091dbbcce7429c253773337b245fc47fb82528d1e93b36d3931849a63a3270a9" width="350" alt="Viseliza" /></a>
</p>


## Аннотация
```bash
Данный репозиторий содержит программное обеспечение для управления Жилищно-коммунальное  хозяйство (далее - ЖКХ). Программа предназначена для автоматизации ключевых процессов, таких  как управление парком (гаражами) для автомобилей, управление заказами клиентов  по перевозке авто.
```


## Введение

```bash
Система управления АТП предлагает следующие возможности:

Приветственное окно аутентификации пользователя
   - Авторизация пользователей
   - Регистрация пользователей

Управление пользователями системы
   - Добавление, редактирование и удаление пользователей

Управление персонами системы
   - Добавление, редактирование и удаление персон

Управление ролями системы
   - Добавление, редактирование и удаление ролей

Управление парком автомобилей:
   - Добавление, редактирование и удаление автомобилей
   - Хранение информации о состоянии автомобилей и их местоположения

Управление перевозками:
   - Создание и редактирование заказов на перевозки
   - Назначение автомобилей на заказы
   - Отслеживание статуса заказов
```

## Назначение и условия применения 

```bash
Данная система предназначена для оптимизации работы АТП, повышения эффективности и снижения  затрат.

Система может быть использована:
- Транспортными компаниями
- Логистическими компаниями
- Производственными предприятиями с собственным транспортом
- Другими организациями, использующими автотранспорт
```


## Установка

```bash
- [ ] Скачайте и установите [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
- [ ] Скачайте последнюю версию `IZ-ATP-portable.zip` или `IZ-ATP-installer.exe`  [со страницы релиза](https://gogs.zxrdev.ru/ZxXxR/ATP/releases).
```

## Установка с помощью `IZ-ATP-portable.zip`

```bash
- [ ] Разархивируйте `IZ-ATP-portable.zip` в удобную Вам папку
- [ ] Запустите файл `Module.exe` 
```

## Установка с помощью `IZ-ATP-installer.exe`

```bash
- [ ] Дважды кликните на `IZ-ATP-installer.exe`.
- [ ] В окне инсталлера выберите папку установки с помощью кнопки `Browse`. *(По умолчанию  `C:\Program Files (x86)\IZ-ATP`)*
- [ ] Нажмите кнопку `Install`.
- [ ] Дождитесь завершения процесса и нажмите кнопку `Close`.
- [ ] Запустите `Module.exe` из ранее выбранной папки.
```


# Термины и сокращения 

Термины и сокращения | Расшифровка
------------ | ------------
АТП | АвтоТранспортное Предприятие
Приложение | Установленная версия программного обеспечения `Module.exe` 
Клиентская часть | `Приложение` используемое пользователем ПК.
Серверная часть | Программно-аппаратная часть сервиса, которая работает на сервере или выделенной машине персонального компьютера
Аутентификация | Процесс передачи данных с `клиенской части` приложения на `серверную часть` приложения для последующего сравнения данных и предоставления доступа `Пользователю`
Авторизация | Процесс `аутентификации` `пользователя` посредством ввода логина и пароля в `приложении`
Регистрация | Процесс создания `пользователя` посредством заполнения полей данными и обработкой `серверной частью` данных
Роль | Спецификация система, предоставляющая доступ  к тому или иному разделу системы, а так же к созданию, редактированию и удалению данных
Пользователь | Лицо, которому предоставлен доступ к проекту с ограниченными правами `роли`
Персона | Составляющие данные (документы) `пользователя`, позволяющие подтвердить личность человека
Автомобиль | Авто, принадлежащее `персоне`
Гараж | Место в парке `АТП`, зарезервированное за `персоной`
Клиент | Лицо, использующее услуги компании
Работник | Лицо, исполняющее услуги компании
Администратор | Ответственное лицо, управляющее `пользователями`, `персонами` и `ролями`