<p align="center">
  <a href="https://github.com/viseliza" target="blank"><img src="https://img.freepik.com/free-vector/real-estate-banners_98292-561.jpg?w=826&t=st=1719520562~exp=1719521162~hmac=091dbbcce7429c253773337b245fc47fb82528d1e93b36d3931849a63a3270a9" width="350" alt="Viseliza" /></a>
</p>


## Аннотация
```bash
Данный репозиторий содержит программное обеспечение для управления Жилищно-коммунальное
хозяйство (далее - ЖКХ). Программа предназначена для автоматизации ключевых процессов, таких
как управление парком (гаражами) для автомобилей, управление заказами клиентов
по перевозке авто.
```


## Введение

```bash
Система управления ЖКХ предлагает следующие возможности:

Приветственное окно аутентификации пользователя
   - Авторизация пользователей
   - Регистрация пользователей

Управление пользователями системы
   - Добавление, редактирование и удаление пользователей

Управление квартирами системы
   - Добавление, редактирование и удаление квартир

Управление кватинциями системы
   - Добавление, редактирование и удаление квитанций

Управление балансом пользователя системы:
   - Добавление, редактирование и удаление баланса
```

## Назначение и условия применения 

```bash
Данная система предназначена для оптимизации работы ЖКХ, повышения эффективности и снижения
затрат.

Система может быть использована:
- Владельцами квартир
- Представителями команий
- Другими организациями, использующими электричество, воду и отопление
```


## Установка

```bash
- [ ] Скачайте и установите [.NET 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).
- [ ] Скачайте последнюю версию `aza.exe` [со страницы релиза]
(https://gogs.zxrdev.ru/viseliza/Z/releases).
```

## Установка с помощью `aza.exe`

```bash
- [ ] Дважды кликните на `aza.exe`.
- [ ] В окне инсталлера выберите папку установки с помощью кнопки `Browse`. *(По умолчанию
`C:\User\Desktop\aza`)*
- [ ] Нажмите кнопку `Install`.
- [ ] Дождитесь завершения процесса и нажмите кнопку `Close`.
- [ ] Запустите `aza.exe` из ранее выбранной папки.
```


# Термины и сокращения 

Термины и сокращения | Расшифровка
------------ | ------------
ЖКХ | Жилищно-коммунальное хозяйство
Приложение | Установленная версия программного обеспечения `aza.exe` 
Клиентская часть | `Приложение` используемое пользователем ПК.
Серверная часть | Программно-аппаратная часть сервиса, которая работает на сервере или выделенной машине персонального компьютера
Аутентификация | Процесс передачи данных с `клиенской части` приложения на `серверную часть` приложения для последующего сравнения данных и предоставления доступа `Пользователю`
Авторизация | Процесс `аутентификации` `пользователя` посредством ввода логина и пароля в `приложении`
Регистрация | Процесс создания `пользователя` посредством заполнения полей данными и обработкой `серверной частью` данных
Роль | Спецификация система, предоставляющая доступ к тому или иному разделу системы, а так же к созданию, редактированию и удалению данных
Пользователь | Лицо, которому предоставлен доступ к проекту с ограниченными правами `роли`