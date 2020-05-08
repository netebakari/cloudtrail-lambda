# cloudtrail-lambda
AWS CloudTrailのログをサブスクライブし、フィルタをかけて必要なものだけSNSに投げるLambda

# モチベーション
AWS CloudTrailのログはCloudWatch Logsに転送される。これを拾い出してSlackに通知したい。

しかし全てのログは不要なので、たとえば[Rootユーザーのログイン](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-reference-aws-console-sign-in-events.html)のような重要なイベントだけを通知したい。

# 実装
CloudTrailのCloudWatch LogsをサブスクライブしてこのLambdaを実行する。

* [フィルター](https://docs.aws.amazon.com/ja_jp/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html)で大雑把に必要なものを取り出す
* さらにこのLambdaで必要なものを取り出してSNSに投げる
* SNSをトリガーとして何かをする（Slackに通知するなど）

SNSに投げた後は関知しない。

# 詳細
現時点でこのLambdaが拾うのは次のイベント。

* コンソールへのログイン（Rootユーザー、IAMユーザー）
* IAM Policyの作成
* IAM Policyのユーザーへのアタッチ
* Security Groupの変更


