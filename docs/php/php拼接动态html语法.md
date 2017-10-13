- 输出：
```php
<?php echo $aData[xx];?>
```
简写：
```php
<?=$aData[xx]?>
```
避免报错：
```php
<?=@$aData[xx]?>
```

- 判断：   
三元表达式：
```php
<?php echo isset $aData[xx] ? x: y;?>
```
if else：
```php
<?php if(Boolean):?>
123
<?php else:?>
456
<?php endif;?>
```
if elseif：
```php
<?php if():?>
123
<?php elseif():?>
456
<?php endif;?>
```

- 循环：
```php
<?php foreach($aData[xx] as $k): ?>
    <?php echo $k[xx]; ?>
<?php endforeach; ?>
```
```php
<?php foreach($aData[xx] as $k=>$v): ?>
    <?php echo $v[xx]; ?>
<?php endforeach; ?>
```

- 获取static库中资源：
```php
<?php echo util_url::getStaticURL('/img/xf/detail/mask.png'); ?>//图片
```

- 下载：   
在 a 标签中加链接/location.href="",下载链接不以http开头，不会刷页面
