{{- define "bi-dashboard.name" -}}
    {{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "bi-dashboard.fullname" -}}
    {{- if .Values.fullnameOverride -}}
        {{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
    {{- else -}}
        {{- $name := default .Chart.Name .Values.nameOverride -}}
        {{- printf "%s" $name | trunc 63 | trimSuffix "-" -}}
    {{- end -}}
{{- end -}}

{{- define "bi-dashboard.chart" -}}
    {{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" -}}
{{- end -}}

{{- define "bi-dashboard.labels" -}}
    helm.sh/chart: {{ include "bi-dashboard.chart" . }}
    app.kubernetes.io/name: {{ include "bi-dashboard.name" . }}
    app.kubernetes.io/instance: {{ .Release.Name }}
    app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
    app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{- define "bi-dashboard.selectorLabels" -}}
    app.kubernetes.io/name: {{ include "bi-dashboard.name" . }}
    app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{- define "bi-dashboard.serviceAccountName" -}}
    {{- if .Values.serviceAccount.create -}}
        {{- default (include "bi-dashboard.fullname" .) .Values.serviceAccount.name -}}
    {{- else -}}
        {{- default "default" .Values.serviceAccount.name -}}
    {{- end -}}
{{- end -}}
